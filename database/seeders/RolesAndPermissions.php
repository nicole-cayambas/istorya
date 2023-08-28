<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissions extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'view_admin']);
        Permission::create(['name' => 'view_users']);
        Role::create(['name' => 'developer'])
        ->syncPermissions([
            'view_admin',
            'view_users'
        ]);
        Role::create(['name' => 'free_user']);
    }
}
