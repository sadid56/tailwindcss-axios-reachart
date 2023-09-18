import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Reachart = () => {
    
        const  students  = [
          {
            "id": 1,
            "name": "Alice",
            "math": 92,
            "physics": 85,
            "chemistry": 78
          },
          {
            "id": 2,
            "name": "Bob",
            "math": 88,
            "physics": 76,
            "chemistry": 90
          },
          {
            "id": 3,
            "name": "Charlie",
            "math": 78,
            "physics": 92,
            "chemistry": 84
          },
          {
            "id": 4,
            "name": "David",
            "math": 95,
            "physics": 89,
            "chemistry": 92
          },
          {
            "id": 5,
            "name": "Eva",
            "math": 80,
            "physics": 84,
            "chemistry": 88
          },
          {
            "id": 6,
            "name": "Frank",
            "math": 72,
            "physics": 79,
            "chemistry": 75
          },
          {
            "id": 7,
            "name": "Grace",
            "math": 88,
            "physics": 92,
            "chemistry": 95
          },
          {
            "id": 8,
            "name": "Helen",
            "math": 94,
            "physics": 88,
            "chemistry": 91
          },
          {
            "id": 9,
            "name": "Ivy",
            "math": 85,
            "physics": 79,
            "chemistry": 86
          },
          {
            "id": 10,
            "name": "Jack",
            "math": 90,
            "physics": 87,
            "chemistry": 89
          }
        ]
      
      
    return ( 
       <div className='mt-10 flex justify-center px-5'>
         <div  style={{maxWidth: '1250px', height: "400px", width: '100%'}}>
            <h2 className='text-3xl mb-5 font-bold text-center'>Student marks chart</h2>
           <ResponsiveContainer width="100%" height="100%">
           <LineChart width={600} height={400} data={students}>
           <Line dataKey="math" stroke='green'></Line>
           <Line dataKey="physics" stroke='red'></Line>
           <Line dataKey="chemistry"></Line>
           <XAxis dataKey="name"></XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           <Legend></Legend>
           <CartesianGrid stroke="#ccc" />
            </LineChart>
           </ResponsiveContainer>
        </div>
       </div>
     );
}
 
export default Reachart;