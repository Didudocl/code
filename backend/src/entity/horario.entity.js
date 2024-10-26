"use strict";
import { EntitySchema } from "typeorm";

const horario_laboral = new EntitySchema({
    name: "horario_laboral",
    tablename: "horario_laboral",
    columns: {
        id_horario_laboral: {
            type: "int",
            primary: true,
            generated: true,
        },
        descripcion: {
            type: "varchar",
            length: "255",
            nullable: false,
        },
    },
});

export default horario_laboral;