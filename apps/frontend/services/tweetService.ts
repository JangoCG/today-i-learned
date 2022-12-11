import {CreateTweetDto} from "@twitter-clone/types";
import httpClient from "../utils/http-client/axios";

export const createTweet = (data: CreateTweetDto) => {
  return httpClient.post("/tweets", data )
}
