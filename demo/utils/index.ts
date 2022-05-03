interface IObj {
  [props: string]: any;
}
interface IOptions {
  params?: IObj;
  data?: IObj;
  other?: RequestInit;
}
class Action {
  constructor() {}

  baseMethod = (url: RequestInfo, options: IOptions) => {
    const { params, data, other = {} } = options;
    const defaultOptions = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    const myOptions = Object.assign({}, defaultOptions, options);
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };

  get = (url: string, options: IOptions) => {
    return this.baseMethod();
  };
}

export default new Action();
