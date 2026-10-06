import { Router } from 'express';
import { veiculoService } from '../services/veiculo.service.js';

export const veiculoRouter = new Router();

veiculoRouter.get("/", async (req,res)=>{
    const veiculo = await veiculoService.getAll();
    return res.status(200).json(veiculo);
});
veiculoRouter.post("/", async (req,res)=>{
    const veiculo = await veiculoService.create(req.body);
    return res.status(201).json(veiculo);
});