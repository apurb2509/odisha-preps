const express = require('express');
const router = express.Router();
const supabase = require('../utils/supabaseClient');

router.post('/', async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, phone, email, message }]);

    if (error) throw error;

    res.status(200).json({ success: true, message: 'Message stored successfully!' });
  } catch (err) {
    console.error('Supabase Insert Error:', err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
