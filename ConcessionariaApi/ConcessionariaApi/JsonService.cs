using Newtonsoft.Json;

namespace ConcessionariaApi
{
    public class JsonService
    {
        public List<T> GetJsonContent<T>(string fileName)
        {
            string json = File.ReadAllText(fileName);
            return JsonConvert.DeserializeObject<List<T>>(json) ?? new List<T>();
        }

        public void UpdateJsonContent<T>(string fileName, T obj)
        {
            string json = File.ReadAllText(fileName);

            List<T> vehicles = JsonConvert.DeserializeObject<List<T>>(json) ?? new List<T>();
            vehicles.Add(obj);

            File.WriteAllText(fileName, JsonConvert.SerializeObject(vehicles));
        }
    }
}
