const router = require("express").Router();
const { Goal, Entry, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("GET /");
    const entryData = await Entry.findAll({
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      ],
    });

    const entries = entryData.map((entry) => entry.get({ plain: true }));

    res.render("homepage", {
      entries,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/entries", withAuth, async (req, res) => {
  console.log(`GET /entries`);
  try {
    const entryData = await Entry.findAll({
      include: [
        {
          model: Comment,
          // attributes: ["comments", "user_id"],
        },
      ],
    });
    console.log(entryData);

    // entry.name
    // entry.text
    // entry.date_created
    // entry.checkbox

    const entry = entryData.map((entry) => entry.get({ plain: true }));
    console.log(entry);

    res.render("entries", {
      ...entry,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/entries/:id", async (req, res) => {
  try {
    const entryData = await Entry.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attribute: ["first_name", "last_name"],
        },
      ],
    });

    const entry = entryData.get({ plain: true });

    res.render("entries", {
      ...entry,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/wellness", withAuth, async (req, res) => {
  try {
    const wellnessData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Goal }],
    });

    const wellness = wellnessData.get({ plain: true });

    res.render("wellness", {
      ...wellness,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  console.log(`GET /login`);
  res.render("signup");
});

router.get("/login", async (req, res) => {
  console.log(`GET /login`);
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/logout", async (req, res) => {
  console.log(`GET /logout`);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // req.session.logged_in = null;
      // res.status(204).end();
      res.redirect("/");
      return;
    });
  } else {
    res.status(404).end();
  }
  // res.render('homepage');
});

module.exports = router;
