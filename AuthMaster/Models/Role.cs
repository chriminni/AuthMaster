﻿namespace AuthMaster.Models
{
    public class Role
    {
        public int RoleID { get; set; }
        public string? RoleName { get; set; }
        public string? Description { get; set; }

        public List<UserRole>? UserRoles { get; set; }
    }
}
