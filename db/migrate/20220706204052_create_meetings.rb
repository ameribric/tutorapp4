class CreateMeetings < ActiveRecord::Migration[7.0]
  def change
    create_table :meetings do |t|
      t.string :time
      t.string :meeting_name
      t.string :location
      t.integer :student_id
      t.integer :tutor_id

      t.timestamps
    end
  end
end
