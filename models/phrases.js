// might need to require socket?

// Creating jobs and phrases
module.exports = function(sequelize, DataTypes) {
  const phrase = sequelize.define("phrases", {
    content: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  return phrase;
};
