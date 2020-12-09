import axios from 'axios';

cnst baseUrl = "https://localhost:5001/api/"

export default{
    dCandidate(url = baseUrl = 'dcandidate/'){
        return {
            fetchAll : () => axious.get(url),
            fetchById : id =>axious.get(url + id),
            create : newRecord => axious.post(url, newRecord),
            update : (id, updateRecord) => axious.put(url + id, updateRecord),
            delete : id => axious.delete(url + id)
        }
    }
}