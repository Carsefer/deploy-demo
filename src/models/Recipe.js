const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      readyInMinutes: {
        type: DataTypes.INTEGER,
      },
      cuisines: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },

      healthScore: {
        type: DataTypes.INTEGER,
      },

      steps: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://cutt.ly/VZcVXeE",
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
