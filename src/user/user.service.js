import prisma from "../../prisma/prismaClient.js";
import bcrypt from "bcrypt";

export const createUser = async (user) => {
  const { dni, passport, name, surname, email, password, dateOfBirth } = user;
  const passwordBcrypt = await bcrypt.hash(password, 10);
  const dateUser = new Date(dateOfBirth);
  const create_user = await prisma.user.create({
    select: {
      id: true,
      dni: true,
      passport: true,
      name: true,
      surname: true,
      email: true,
      dateOfBirth: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
    data: {
      dni,
      passport,
      name: name.toLowerCase(),
      surname: surname.toLowerCase(),
      email: email.toLowerCase(),
      password: passwordBcrypt,
      dateOfBirth: dateUser,
    },
  });
  return create_user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      dni: true,
      passport: true,
      name: true,
      surname: true,
      email: true,
      dateOfBirth: true,
    },
    where: { deletedAt: null },
  });
  return users;
};
export const getUser = async (id) => {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      dni: true,
      passport: true,
      name: true,
      surname: true,
      email: true,
      dateOfBirth: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
    where: { id, deletedAt: null },
  });
  return user;
};
export const updateUser = async (id) => {
  const user = await prisma.user;
  return user;
};
export const deleteUser = async (id) => {
  const user = await prisma.user;
  return user;
};
