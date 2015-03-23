# MascotRace
### Contributers: Eric, Kwasi and Meir
GA exercise for the Mascot race


1. Create the Mascot constructor 
2. Mascot constructor should hold the variables('name', 'food', an integer for endurance)
3. create a (run) method that creates a distance variable 
  4. Distance is between a floor of 1 and ceiling of mascot endurance
  5. logs to the console "NAME the FOODITEM ran DISTANCE meters!"
6. Create three instances of the Mascot. (Name the competitors!)
7. create a function called 'race'
  8. race takes int race_distance and the three mascots as arguments
9. race should 
 - keep track of remaining distance left for all individual mascots
 - call run() on each mascot
 - subtract distance from mascot's distance left
 - log each mascot's remainging distance
 - if any mascot crosses the finish line log winner's name
 - if any multiple mascot's finish in the same turn, the mascot with the least distance, wins.
 - if there is a tie, log tie.
