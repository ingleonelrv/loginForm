const BASE_API='http://192.168.1.7:3000'

class USER_API{
    async login({email,password}){
        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);
        try {
            const query = await fetch(`${BASE_API}/users/login`,{
                method:'POST',
                body:formData.toString(),
                json:true,
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            })
            const result= await query.json()
            return result
        } catch (error) {
            console.log('ERROR LOGIN')
        }
    }
    async register({email,password,confirmPassword,type}){
        try {
            const formData = new URLSearchParams();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('confirmPassword', confirmPassword);
            formData.append('type', type);
            const query=await fetch(`${BASE_API}/users/register`,{
                method:'POST',
                body:formData.toString(),
                json:true,
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            })
            const result= await query.json()
            return result
        } catch (error) {
            console.log('ERROR')
        }
    }
}
export default new USER_API