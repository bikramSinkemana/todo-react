import axios from "axios";

export function get(url: any) {
  console.log(url);
  //fetch data
  return axios({
    method: "GET",
    url: url
  });
}

export function post(url: any, data: any) {
  //post new data
  return axios({
    method: "POST",
    url: url,
    data: data
  });
}

export function put(url: any, data: any, id: number) {
  //update
  return axios({
    method: "PUT",
    url: `${url}/${id}`,
    data: data
  });
}

export function remove(url: any, id: number) {
  //delete data
  return axios({
    method: "DELETE",
    url: `${url}/${id}`
  });
}
