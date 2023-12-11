"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found!");

    // find interactions for the user and group by tags...
    // interactions..

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    // const { page = 1, pageSize = 20, filter, searchQuery } = params;
    const tags = await Tag.find({}).sort({ createdAt: -1 });
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
