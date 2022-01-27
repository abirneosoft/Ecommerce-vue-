import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data)
{
    return axios.post(`${MAIN_URL}login`,data)
}
export function userRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data)
}
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}
export function banner(){
    return axios.get(`${MAIN_URL}test`)
}

export function categories(){
    return axios.get(`${MAIN_URL}category`)
}
export function product_image()
{
    return axios.get(`${MAIN_URL}product_image`)
}
export function product(id)
 {
    return axios.get(`${MAIN_URL}products/${id}`)
}
export function productDetails(id)
 {
    return axios.get(`${MAIN_URL}product_detail/${id}`)
}
export function profile()
{
    var token = localStorage.getItem('access_token');
    return axios.get(`${MAIN_URL}profile`, { headers: { "Authorization": `Bearer ${token}` } })
}

export function profiledit(data)
{
    var token = localStorage.getItem('access_token');
    return axios.post(`${MAIN_URL}updateprofile`,data, { headers: { "Authorization": `Bearer ${token}` } })
}
export function changePassword(data)
{
    var token = localStorage.getItem('access_token');
    return axios.post(`${MAIN_URL}changepass`,data, { headers: { "Authorization": `Bearer ${token}` } })
}

export function cms()
{
    return axios.get(`${MAIN_URL}cms`)
}
export function cmsById(id)
{
    return axios.get(`${MAIN_URL}cms/${id}`)
}
export function userWish(data)
{
    return axios.post(`${MAIN_URL}wish`,data)
}
export function userDetail(data)
{
    return axios.post(`${MAIN_URL}userdetail`,data)
}
export function orderDetail(data)
{
    return axios.post(`${MAIN_URL}orderdetail`,data)
}

export function orderDetails(data)
{
    return axios.get(`${MAIN_URL}orderdetail/${data}`)
}
export function configure()
{
    return axios.get(`${MAIN_URL}config`)
}

export function coupons(data)
{
    return axios.get(`${MAIN_URL}coupon/${data}`)
}

export function userWishlist()
{
    return axios.get(`${MAIN_URL}wish`)
}
export function deletewishlist(id){
    return axios.delete(`${MAIN_URL}wish/${id}`)
}
export function newsleter(data){
    return axios.post(`${MAIN_URL}News`,data)
}
export default {userLogin,userRegister,categories,banner,product_image,profiledit,profile,userWish,deletewishlist,coupons,configure,newsleter};