import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('cake', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        unique: true
      },

      comment: {
        type: DataTypes.TEXT
      },

      image_url: {
        type: DataTypes.STRING
      },

      yum_factor: {
        type: DataTypes.INTEGER
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('cake');
  }
};
