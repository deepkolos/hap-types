interface Api {
  name: string;
  href: string;
  moduleName: string;
  moduleVariable: string;
  bgRestrictDesc: string;
  methods: Array<Method>;
  listeners: Array<Listener>;
  attributes: Array<Attribute>;
}

interface Method {
  name: string;
  desc: string;
  since?: string;
  example?: string;
  args: Array<Arg>;
  return: Array<Return>;
}

interface Arg {
  name: string;
  desc: string;
  type: string;
  since?: string;
  required?: Boolean;
  attributes: Array<Arg>;
}

interface Attribute {
  name: string;
  type: string;
  desc: string;
  since?: string;
  readable: Boolean;
  writeable: Boolean;
}

interface Return {
  name: string;
  type: string;
  desc: string;
  since?: string;
  attributes: Array<Return>;
}

interface Listener {
  name: string;
  desc: string;
  since?: string;
  example: string;
  args: Array<Arg>;
}
