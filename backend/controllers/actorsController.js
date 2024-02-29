const fs = require('fs');
const path = require('path');

exports.getActors = (req, res) => {
  fs.readFile(path.join(__dirname, '../data/data.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
};