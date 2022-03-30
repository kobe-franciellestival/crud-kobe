import { Request, response, Response } from "express";
import { UsersServices } from "../services/usersServices";

class UsersController {
  async create(request: Request, response: Response) {
    const { usuario, phone, email } = request.body;

    const usersServices = new UsersServices();

    try {
      const users = await usersServices.create({ usuario, phone, email })
      return response.json(users)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }

    const users = await usersServices.create({ usuario, phone, email });

    return response.json(users)
  }

  async index(request: Request, response: Response) {
    const usersServices = new UsersServices()

    try {
      const users = await usersServices.index()
      return response.json(users)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
  async show(request: Request, response: Response) {
    const usersServices = new UsersServices();
    const { id } = request.params;

    try {
      const users = await usersServices.show({ id });
      return response.json(users);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    const usersServices = new UsersServices()
    const { id } = request.params

    try {
      const users = await usersServices.delete({ id })
      return response.json({ message: 'User id deleted sucessfully!' })
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const usersServices = new UsersServices()

    const { id } = request.params
    const { usuario, phone, email } = request.body;

    try {
      const users = await usersServices.update({ id, usuario, phone, email })
      return response.json({ message: "User updated successfully" })
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }

  }

}


export { UsersController };