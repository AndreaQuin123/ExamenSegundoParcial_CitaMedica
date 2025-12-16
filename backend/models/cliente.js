module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('cliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  });

  Cliente.associate = function(models) {
    Cliente.hasMany(models.Cita, { foreignKey: 'clienteId' });
  };

  return Cliente;
};