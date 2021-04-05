
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('projects',tbl =>{
            tbl.increments('project_id');
            tbl.string('project_name').notNullable();
            tbl.string('project_description');
            tbl.boolean('project_completed');
        })
        .createTable('resources',tbl =>{
            tbl.increments('resource_id');
            tbl.string('resource_name').notNullable();
            tbl.string('resource_description');
            tbl.unique('resource_name');
        })
        .createTable('tasks',tbl =>{
            tbl.increments('task_id');
            tbl.string('task_description').notNullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed');
            tbl.integer('project_id').notNullable();
            tbl.foreign('project_id').references('projects.project_id');
        })
        .createTable('projects_resources',tbl =>{
            tbl.increments('projects_resources_id');
            tbl.integer('project_id').notNullable();
            tbl.integer('resource_id').notNullable();
            tbl.foreign('project_id').references('projects.project_id');
            tbl.foreign('resource_id').references('resources.resource_id');
        })
  )
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists('projects')
            .dropTableIfExists('resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('projects_resources')
    );
};
