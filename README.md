# Grand Horizon Hotel Room Booking

A small, beginner-friendly hotel booking page made with HTML, CSS, and JavaScript. The feature branch adds an improved booking experience.

## Run the booking application

Open `index.html` in a web browser. Enter a guest name, choose a room and dates, then select **Book Now**. The page displays a confirmation; it does not save bookings to a database. `booking.txt` is a sample text template, not live storage.

## Git practical

Open the VS Code terminal (**Terminal > New Terminal**) and make sure it is in the `HotelBooking` project folder. Run each command separately, in order. Git is already initialized in this workspace; running `git init` again safely confirms the repository.

### 1. Initialize Git and create `main`

1. Run `git init` — initialize Git in this folder (or confirm its existing repository).
2. Run `git branch -M main` — rename the current branch to `main`.
3. Run `git status` — check which files Git sees.
4. Run `git add README.md index.html style.css script.js booking.txt` — stage the five project files for a commit.
5. Run `git commit -m "Initial hotel booking application"` — save the staged files as the first project version.

### 2. Create `develop` and `feature`

6. Run `git switch -c develop` — create the `develop` branch and switch to it.
7. Run `git switch -c feature` — create the `feature` branch from `develop` and switch to it.
8. In VS Code, open `index.html`. Find this line:

   ```html
   <p class="tagline">Your stay begins with a simple booking.</p>
   ```

9. On the `feature` branch, replace it with:

   ```html
   <p class="tagline">Find your next comfortable stay.</p>
   ```

10. Run `git add index.html` — stage the feature branch's page change.
11. Run `git commit -m "Update hotel booking tagline"` — save that change on `feature`.
12. Run `git switch develop` — return to the `develop` branch.
13. In VS Code, change the *same original tagline line* to this different text:

   ```html
   <p class="tagline">Enjoy a relaxing stay at Grand Horizon Hotel.</p>
   ```

14. Run `git add index.html` — stage the separate `develop` change.
15. Run `git commit -m "Personalize hotel welcome message"` — save it on `develop`.

### 3. Create and resolve the merge conflict manually

16. Run `git merge feature` — merge the feature work into `develop`. Git should report a conflict in `index.html` because both branches changed the same line.
17. In VS Code, open `index.html`. Use the **Merge Editor** buttons to choose the feature version, the `develop` version, or edit the result to combine them. Keep one valid `<p class="tagline">...</p>` line, and make sure all `<<<<<<<`, `=======`, and `>>>>>>>` conflict markers are gone. Save the file. Do not run `git merge --abort`; resolving this conflict is the practical exercise.
18. Run `git status` — confirm that Git lists `index.html` as conflicted until you stage the resolution.
19. Run `git add index.html` — tell Git you have resolved the conflict.
20. Run `git commit -m "Resolve tagline merge conflict"` — commit the manual resolution on `develop`.

### 4. Merge `develop` into `main`

21. Run `git switch main` — switch to the main branch.
22. Run `git merge develop` — bring the completed develop work into `main`.
23. Run `git status` — check that your working tree is clean.

### 5. Connect GitHub and push all branches

24. On GitHub, create a **new empty repository** named `HotelBooking`. Do not add a README, license, or `.gitignore` there because this project already has its files.
25. Replace `YOUR-USERNAME` below with your GitHub username, then run `git remote add origin https://github.com/YOUR-USERNAME/HotelBooking.git` — connect this local repository to GitHub.
26. Run `git push -u origin main` — upload `main` and set its upstream tracking branch.
27. Run `git push -u origin develop` — upload `develop` and set its upstream tracking branch.
28. Run `git push -u origin feature` — upload `feature` and set its upstream tracking branch.
29. Refresh the GitHub repository page and use its branch selector to verify all three branches are present.

If Git asks for your identity before the first commit, configure your own name and email with `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`, then retry the commit. Use the email associated with your GitHub account if you want GitHub to link your commits to your profile.
