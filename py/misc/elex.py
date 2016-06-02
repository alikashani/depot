from elex.api import Election

election = Election(electiondate = '2015-11-03', testResults = False, liveResults = True, is_test=False)
races = election.races
