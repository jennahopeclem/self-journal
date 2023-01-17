<<<<<<< HEAD
const router = require("exress").Router();
const { Entry, Goals, User, Comments } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    if (Entry.checkbox) {
      const entryData = await Entry.findAll({
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      });

      const entries = entryData.map((Entry) => Entry.get({ plain: true }));
      res.render("homepage", {
        entries,
        logged_in: req.session.logged_in,
      });
    }
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
          attributes: ["first_name", "last_name"],
        },
      ],
    });
    const entries = entryData.get({ plain: true });

    res.render("entries", {
      ...entries,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", withAuth, async(req, res) => {
    try {
        const wellnessData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Goals }],
        )})

const wellness = wellnessData.get({ plain: true });
res.render('wellness', {
    ...wellness,
    logged_in: true
});

    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
=======
const router = require('express').Router();
const { Goals, Entry, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        if (Entry.checkbox) {
            const entryData = await Entry.findAll({
                include: [{
                    model: User,
                    attributes: ['first_name', 'last_name']
                }]
            });

            const entries = entryData.map((entry) => entry.get({ plain: true }));

            res.render('homepage', {
                entries,
                logged_in: req.session.logged_in
            });

        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/entries/:id', async (req, res) => {
    try {
        const entryData = await Entry.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attribute: ['first_name', 'last_name'],
                },
            ]
        })

        const entry = entryData.get({ plain: true });

        res.render('entries', {
            ...entry,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/wellness', withAuth, async (req, res) => {
    try {
        const wellnessData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Goals }],
        })

        const wellness = wellnessData.get({ plain: true });

        res.render('wellness', {
            ...wellness,
            logged_in: true
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/entry', withAuth, async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            include: [{
                model: Comments,
                attributes: ['comments', 'user_id']
            }]
        });

        const entry = entryData.get({ plain: true });

        res.render('entries', {
            ...entry,
            logged_in: true
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/wellness');
        return;
    }

    res.render('login');
});

module.exports = router;
>>>>>>> 4d6c40984a7d9b85e74a4e1956a35389f21e8f00
