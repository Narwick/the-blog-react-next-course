import { postRepository } from "@/repositories/post";

export const findPostByIdAdmin = async (id: string) => {
  return postRepository.findById(id);
};

export const findAllPostAdmin = async () => {
  return postRepository.findAll();
};