require 'date'
require 'fileutils'

start  = Date.parse("1 Feb 2016")
finish = Date.parse("20 May 2016")

initial_weekno = start.cweek

(start..finish).each do |date|
  human        = date.strftime("%A, %e %b, %Y")
  weekno       =  date.cweek - initial_weekno + 1
  dirname      = "week#{weekno.to_s.rjust(2, "0"}"
  old_filename = "#{date}.md"
  new_filename = File.join dirname, "#{date.strftime '%a'}-#{date}.md".downcase

  next if date.saturday? || date.sunday?
  Dir.mkdir dirname unless Dir.exist? dirname

  if !File.exist?(old_filename) && !File.exist?(new_filename)
    File.write old_filename, "#{human}\n"+
                         "#{'='*human.length}\n"+
                         "\n"+
                         "12:00 Lunch\n"+
                         "-----------\n"+
                         "\n"+
                         "Homework\n"+
                         "--------\n"
  end

  if File.exist?(old_filename) && !File.exist?(new_filename)
    FileUtils.mv old_filename, new_filename
  end
end
