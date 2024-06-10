type MainRoutes = {
  id: string;
  name: string;
  url: string;
};

type DesignRoutes = {
  id: string;
  name: string;
  url: string;
};

type DesignProject = {
  url: string;
  title: string;
  desc: string;
  img: string;
};

type LocationT = {
  id: string;
  country: string;
  office: {
    name: string;
    adress1: string;
    adress2: string;
  };
  contact: {
    name: string;
    phone: string;
    email: string;
  };
  map: string;
};

type FormDataType = {
  status: string;
  data: { name: string; email: string; phone: string; msg: string };
};
