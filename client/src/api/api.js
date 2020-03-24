import *as axios from 'axios';

const instans = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000'
})

export const ProductApi = {
  getProduct() {
    return instans
      .get(`/products`)
      .then(response => response.data)
  }
}

export const authAPI = {

  login(email, password) {
    return instans.post(`auth/login`, { email, password })
  }
}