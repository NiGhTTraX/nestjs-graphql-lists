import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query()
  async user(@Args('id') id: string) {
    return { id };
  }

  @ResolveField('posts')
  async posts(@Parent() user: any) {
    // WHAT SHOULD I RETURN HERE???
    return [{ id: 1 }];
  }
}

@Resolver('Post')
export class PostResolver {
  @Query()
  async post(@Args('id') id: string) {
    return { id, body: 'foobar' };
  }
}
