
using System.ComponentModel.DataAnnotations;

namespace AuthMaster.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string? UserName { get; set; }
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; } = string.Empty;
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumberConfirmed { get; set;} = string.Empty;
        
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public List<UserRole>? UserRoles { get; set; }

    }
}
