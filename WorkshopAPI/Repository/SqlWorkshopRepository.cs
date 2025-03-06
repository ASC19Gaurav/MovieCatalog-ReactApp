using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Data;
using WorkshopAPI.Model.Domain;

namespace WorkshopAPI.Repository
{
    public class SqlWorkshopRepository:IWorkshopRepository
    {

        private ApplicationDbContext _db;

        public SqlWorkshopRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public Task<Workshop> CreateAsync(Workshop workshop)
        {
            throw new NotImplementedException();
        }

        public Task<Workshop?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        async public Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null, string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "")
        {
            var query = _db.Workshops.AsQueryable();

            // Filtering
            if (!string.IsNullOrWhiteSpace(filterOn) && !string.IsNullOrWhiteSpace(filterQuery))
            {
                if (filterOn.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    //query = query.Where(w => w.Name.Contains(filterQuery));
                    query = query.Where(w => w.Name.ToUpper().Contains(filterQuery.ToUpper()));
                }
            }
            if (!string.IsNullOrWhiteSpace(sortBy))
            {
                if (sortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    query = isAscending ? query.OrderBy(x => x.Name) : query.OrderByDescending(x => x.Name);
                }
                //else if (sortBy.Equals("StartDate", StringComparison.OrdinalIgnoreCase))
                //{
                //    query = isAscending ? query.OrderBy(x => x.StartDate) : query.OrderByDescending(x => x.StartDate);
                //}
            }
            if (_embed.Equals("sessions", StringComparison.OrdinalIgnoreCase))
            {
                query = query.Include("Sessions");
            }

            // Pagination
            var skipResults = (pageNumber - 1) * pageSize;
            query = query.Skip(skipResults).Take(pageSize);

            var workshopsDomain = await query.ToListAsync();
            return workshopsDomain;
        }

        public async Task<Workshop?> GetByIdAsync(int id)
        {
            return await _db.Workshops.Include("Sessions").FirstOrDefaultAsync(w => w.Id == id);
        }

        public Task<Workshop?> UpdateAsync(int id, Workshop workshop)
        {
            throw new NotImplementedException();
        }
    }
}
