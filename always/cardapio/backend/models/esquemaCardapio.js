const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    sanduiche: {type: [String], required: true, enum: ['sdc1','sdc2']},
    pao: {type: [String], required: true, enum: ['pao1','pao2','pao3','pao4','pao5']},
    proteina: {type: [String], required: true, enum: ['prot1','prot2','prot3','prot4','prot5']},
    vegetais: {type: [String], required: true, enum: ['veg1','veg2','veg3','veg4','veg5','veg6','veg7','veg8']},
    queijo: {type: [String], required: true, enum: ['qj1','qj2','qj3','qj4','qj5']},
    molho: {type: [String], required: true, enum: ['molho1','molho2','molho3','molho4','molho5','molho6']},
    adicionais: {type: [String], required: false, enum: ['adc1','adc2','adc3','adc4','adc5','adc6']},
});

const AcompSchema = new Schema ({
    acomp1: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    acomp2: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    acomp3: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    acomp4: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    acomp5: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    acomp6: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
})

const BebidaSchema = new Schema ({
    beb1: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    beb2: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    beb3: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    beb4: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    beb5: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
    beb6: {type: [String], required: false, enum: ['0','1','2','3','4','5']},
})

module.exports = mongoose.model('Cardapio', ProductSchema);
module.exports = mongoose.model('AcompCardapio', AcompSchema);
module.exports = mongoose.model('BebidaCardapio', BebidaSchema);