import prisma from "../../prisma/prismaClient.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./user.service.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los usuario" });
  }
};

export const getUserController = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUser(id);
    if (!existUser(id))
      return res
        .status(404)
        .json({ msg: "No se encontro el usuario ingresado" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el usuario" });
  }
};

export const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el usuario" });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!existUser)
      return res.status(404).json({ msg: "Usuario no encontrado" });
    const user = await updateUser(id, req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al actualizar el usuario" });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!existUser(id))
      return res.status(404).json({ msg: "Usuario no encotrado" });
    const user = await deleteUser(id);
    res.status(200).json({ msg: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar el usuario" });
  }
};

export const existUser = async (id) => {
  try {
    const validUser = await prisma.user.findUnique({
      where: { id },
    });
    if (!validUser) return false;
    return true;
  } catch (error) {
    return false;
  }
};
