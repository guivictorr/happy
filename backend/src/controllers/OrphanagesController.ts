import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';

class OrphanagesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find();

    return response.status(200).json(orphanages);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return response.status(200).json(orphanage);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
}

export default OrphanagesController;
