import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class LoggedUserOutput {
  @Field(() => String)
  access_token: string;
}