const postCategoryModel = (DataTypes) => ({
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true,
    references: {
      model: 'Categories',
      key: 'id',
    },
  },
});

const blogCategoryAssociate = {
  as: 'categories',
  through: 'PostsCategories',
  foreignKey: 'postId',
  otherKey: 'categoryId',
};

const categoryBlogAssociate = {
  as: 'posts',
  through: 'PostsCategories',
  foreignKey: 'categoryId',
  otherKey: 'postId',
};

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    postCategoryModel(DataTypes),
    {
      tableName: 'PostsCategories',
      timestamps: false,
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, blogCategoryAssociate);
    models.Category.belongsToMany(models.BlogPost, categoryBlogAssociate);
  };

  return PostCategory;
};
