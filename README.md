**Setting up git**

**Step 1:** Fork Summit-App to GitHub Account

1. Go to GitHub of Summit-App
2. Click &quot;Fork&quot; on the top right to add the repo to your repos
3. Go to your Summit-App forked repo



**Step 2:** Local Clone of Forked Summit-App

1. Click &quot;Clone or download&quot; and copy the URL
2. Open Terminal and cd to where you want to have the repo on your computer
3. Type: git clone URL
4. cd to the Summit-App repo

**Step 3:** Configure local fork with upstream develop

1. Go to [https://github.com/SummitApp/Summit-App](https://github.com/SummitApp/Summit-App)
2. Click &quot;Clone or download&quot;
3. Copy the URL to your clipboard
4. Go back to terminal (make sure you are in your repo)
    - To confirm you&#39;re in your local repo type: pwd
    - Expected Result: PATH/Summit-App
5. Type: git remote -v
    - Expected result:
    
    origin  [https://github.com/\&lt;USERNAME\&gt;/Summit-App.git](https://github.com/%3cUSERNAME%3e/Summit-App.git) (fetch)

    origin  [https://github.com/\&lt;USERNAME\&gt;/Summit-App.git](https://github.com/%3cUSERNAME%3e/Summit-App.git) (push)
6. Type: git remote add upstream <URL\_FROM\_STEP\_2\>
7. Type: get remote -v
    - Expected result:

    origin  [https://github.com/\&lt;USERNAME\&gt;/Summit-App.git](https://github.com/%3cUSERNAME%3e/Summit-App.git) (fetch)

    origin  [https://github.com/\&lt;USERNAME\&gt;/Summit-App.git](https://github.com/%3cUSERNAME%3e/Summit-App.git) (push)

    upstream         [https://github.com/SummitApp/Summit-App.git](https://github.com/SummitApp/Summit-App.git) (fetch)

    upstream         [https://github.com/SummitApp/Summit-App.git](https://github.com/SummitApp/Summit-App.git) (push)

Let me explain what you how have set up:

So, we have our SummitApp/Summit-App repo that has a master and a develop branch, and in step 1 you forked this repo to your GitHub account. This makes a copy of the repo for you in your account. In step 2 we cloned our fork to our local computer, which allows you to get/add anything found in the fork on your computer with pull/push. The last, and most confusing aspect is step 3, this is where we configure our local repo to pull from our SummitApp/Summit-App repo – which we will refer to as &quot;upstream&quot;. This is because while you are working on a specific feature on your local fork, somebody else might have added code to the &quot;upstream develop&quot; branch (this is where we will have all of our development code that people have decided to be finished). You might be asking yourself &quot;why do this?&quot;. The answer to this is simple: we don&#39;t want one specific person to be able to break our upstream develop branch, which will be our &quot;stable&quot; codebase. This does make you have to do extra steps when trying to get your code from upstream develop. Now I will go through how to actually use this setup to develop code for specific features, push code to your fork and also get your feature code into the develop branch.

**Using Git**

These will be the steps you do when getting information to/from the develop branch and your fork. When in doubt about anything, ping Trace/Andrew and we will see what we can help with. Oftentimes "git status" will give you information on what you need to do! NEVER push straight to our develop branch. If you want to get your code into develop, submita PR. 

Do not work on the same feature that others are working on, this will cause merging problems that I'm not very good at resolving. If you have an issue ask Andrew.

**General Flow**
1. Push any changes on your local repo to your fork
2. Pull from upstream develop
3. Resolve any merge conflicts
4. Push local repo to your fork
5. [Repeat till ready for PR]

**Pull**
1. git pull upstream develop
    - Pulls from the upstream develop in Summit-App/Summit-App
2. git pull
    - Pulls from your fork

**Push to Fork**
1. git add WHATEVER
2. git commit -m MSG
3. git push

**Push to branch**
1. Go to your github fork online (GIT_USERNAME/Summit-App)
2. Click "New Pull Request" button (its in the same line as "Clone" green button)
3. Check over the code to make sure it is what you want in develop
4. Click "Create Pull Request"
5. Make sure to "Squash" your commit (can't remember where this option is hoenstly)
6. Comment on what the code you worked on does. THESE COMMENT SHOULD BE IN DEPTH AND ARE VERY IMPORTANT
7. Add at least one reviewer
8. Assign yourself to this PR

**Accepting/Rejecting/Commenting a PR**
1. Look over the PR
2. If code doesn't look good, commets are missing, or the code doesn't have features it supposed to have comment on the respective code
    - To comment on specific code, go to the "Files Changed" tab
    - Hover on the left of their code (by the numbers) and click the "+"
    - Enter your comment here:
    - Click "Start Review" (this will add things to a stack if you have multiple comments to make) otherwise click "Add single comment"
    - When done click the "Review Changes" button (its green) and select Comment/Approve/Request Changes depending on if the PR should be accepted/edited. (The person who made a PR will get notification of once you do this)
    - (REPEAT TILL READY TO MERGE)
    - WHEN IN DOUBT ABOUT THE FOLLOWING STEPS - ask Trace/Andrew for help to reduce merging problems. We will be happy to help out :) 
    - When ready to merge all you need to do is:
    - Make sure the PR can be automatically merged (if it isn't talk with Trace/Andrew)
    - Make sure the green button says "Merge pull request"


**Updating a PR**

Lets say you made a PR and someone said you need to change something on it. What do you do?
1. pull from upstream develop
2. resolve conflicts (if any)
3. make required changed from PR comments
4. push to your fork (this will automatically update your PR! Cool right!?!?)

**Starting React App**
1. Go into PATH/Summit-App/app
2. (make sure you have npm/nodeJS installed by downloading here: https://nodejs.org/en/)
3.  &quot;npm install&quot; to install all requirements for our project
4. Run &quot;npm start&quot;
5. A node server should spin up and a web browser should open up with a web page that has the React logo spinning in it! SUCCESS!