/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TestimonialWhereUniqueInput } from "../../testimonial/base/TestimonialWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TestimonialUpdateManyWithoutUsersInput {
  @Field(() => [TestimonialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TestimonialWhereUniqueInput],
  })
  connect?: Array<TestimonialWhereUniqueInput>;

  @Field(() => [TestimonialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TestimonialWhereUniqueInput],
  })
  disconnect?: Array<TestimonialWhereUniqueInput>;

  @Field(() => [TestimonialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TestimonialWhereUniqueInput],
  })
  set?: Array<TestimonialWhereUniqueInput>;
}

export { TestimonialUpdateManyWithoutUsersInput as TestimonialUpdateManyWithoutUsersInput };
