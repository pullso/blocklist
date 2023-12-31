/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * BlockList
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type BlockListControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockListItemDtoType =
  (typeof BlockListItemDtoType)[keyof typeof BlockListItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockListItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface BlockListItemDto {
  blockListId: number;
  createdAt: string;
  data: string;
  id: number;
  type: BlockListItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockListItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
) => {
  return createInstance<void>({
    url: `/auth/sign-up`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: signUpBodyDto,
  });
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
) => {
  return createInstance<void>({
    url: `/auth/sign-in`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: signInBodyDto,
  });
};

export const authControllerSingOut = () => {
  return createInstance<void>({ url: `/auth/sign-out`, method: "POST" });
};

export const authControllerGetSessionInfo = () => {
  return createInstance<GetSessionInfoDto>({
    url: `/auth/session`,
    method: "GET",
  });
};

export const accountControllerGetAccount = () => {
  return createInstance<AccountDto>({ url: `/account`, method: "GET" });
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
) => {
  return createInstance<AccountDto>({
    url: `/account`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: patchAccountDto,
  });
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
) => {
  return createInstance<BlockListDto>({
    url: `/block-list`,
    method: "GET",
    params,
  });
};

export const blockListControllerAddBlockItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
) => {
  return createInstance<BlockListItemDto>({
    url: `/block-list/item`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: addBlockItemDto,
  });
};

export const blockListControllerRemoveBlockItem = (id: number) => {
  return createInstance<BlockListItemDto>({
    url: `/block-list/item/${id}`,
    method: "DELETE",
  });
};

export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSingOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSingOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerGetList>>
>;
export type BlockListControllerAddBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
