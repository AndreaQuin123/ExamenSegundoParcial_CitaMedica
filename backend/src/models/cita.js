module.exports = (sequelize, DataTypes) => {
  const Cita = sequelize.define('Cita', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    tipo_consulta: {
      type: DataTypes.ENUM('presencial', 'virtual'),
      allowNull: false
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Programada',
      validate: {
        isIn: [['Programada', 'Cancelada']]
      }
    }
  }, {
    tableName: 'citas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Cita.associate = function(models) {
    Cita.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
    Cita.belongsTo(models.Doctor, { foreignKey: 'doctorId', as: 'doctor' });
  };

  return Cita;
};
