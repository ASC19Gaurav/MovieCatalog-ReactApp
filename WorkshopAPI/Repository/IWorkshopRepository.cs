using WorkshopAPI.Model.Domain;

namespace WorkshopAPI.Repository
{
    public interface IWorkshopRepository
    {

        Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null,
                string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "");
        Task<Workshop?> GetByIdAsync(int id);
        Task<Workshop> CreateAsync(Workshop workshop);
        Task<Workshop?> UpdateAsync(int id, Workshop workshop);
        Task<Workshop?> DeleteAsync(int id);
    }
}
