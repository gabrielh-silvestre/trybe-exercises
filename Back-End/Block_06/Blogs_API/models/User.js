const userModel = (DataTypes) => ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', userModel(DataTypes), {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'posts',
    });
  };

  return User;
};
