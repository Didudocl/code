"use strict";
import { EntitySchema } from "typeorm";

const usuario = new EntitySchema({
    name:"usuario",
    tablename:"usuario",
    columns: {
        id_usuario: {
            type: "int",
            primary: true,
            generated: true,
        },
        nombre_usuario: {
            type: "varchar",
            length: "255",
            nullable: false
        },
        apellido_usuario: {
            type: "varchar"
        },
        correo_usuario: {
            type: "varchar"
        },
        contrasena_usuario: {
            type: "varchar"
        },
        rol_usuario: {
            type: "varchar"
        },
        id_horario_laboral: {
        type: "int",
        nullable: true, // Si puede existir un usuario sin horario asignado
        },
    },
    relations: {
        horario_laboral: {
            type: "many-to-one",
            target: "horario_laboral",
            joinColumn: { // Sirve para definir la clave foránea
                name: "id_horario_laboral",
            },
            onDelete: "SET NULL", // Define el comportamiento cuando se elimina un horario
        },
    },
});

export default usuario;