module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('doctor', {
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
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
      },
  });

  Doctor.associate = function(models) {
    Doctor.hasMany(models.Cita, { foreignKey: 'doctorId' });
  };

  return Doctor;
};