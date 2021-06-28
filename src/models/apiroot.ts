export interface ILinkDto {
  rel: string;
  href: string;
  methods: Array<string>;
}

export interface IApiRootDto {
  href: string;
  links: Array<ILinkDto>;
}

