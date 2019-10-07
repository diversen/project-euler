"""
Python solution to project euler problem 54
"""

class Poker(object):

    def read_file (self, file_name = None):
        file_name = 'resources/p054_poker.txt'
        f = open(file_name)
        fc = f.read()
        return fc

    def convert_hand(self, hand):
        """ convert T to A from 10 to 14. Convert to ints """
        n_hand = [] 
        for c in hand:
            cards = list(c)
        
            if cards[0] == 'T': cards[0] = 10
            elif cards[0] == 'J': cards[0] = 11
            elif cards[0] == 'Q': cards[0] = 12
            elif cards[0] == 'K': cards[0] = 13
            elif cards[0] == 'A': cards[0] = 14
            elif True: cards[0] = int(cards[0])
            n_hand.append(cards)

        n_hand.sort(key=lambda x: x[0])
        return n_hand  

    def high_card(self, hand):
        """ Get hightest card """
        return 0 + hand[4][0]

    
    def identical_count(self, hand):
        """ Get number of identical counts """
        d = {}
        for c in hand: 
            d[c[0]] = 0

        for c in hand:
            d[c[0]] += 1

        return d

    # Return pair value or 0
    def pair(self, hand):
        
        d = self.identical_count(hand)
        for key, value in d.items():
            if value == 2:
                return key
                
        return 0


    def two_pair(self, hand):
        d = self.identical_count(hand)
        pairs = []
        for key, value in d.items():
            if value == 2:
                pairs.append(key)
        
        if len(pairs) == 2:
            pairs.sort(reverse=True)
            return [pairs[0], pairs[1]]
        
        return []

    def three_kind(self, hand):
        d = self.identical_count(hand)
        for key, value in d.items():
            if value == 3:
                return key
        
        return 0

    def straight(self, hand):
        
        nums = []
        for n in hand:
            nums.append(n[0])

        if nums[1] != (nums[0] + 1):
            return 0
        if nums[2] != (nums[1] + 1):
            return 0
        if nums[3] != (nums[2] + 1):
            return 0
        if nums[4] != (nums[3] + 1):
            return 0
        
        return nums[4]    

    def flush(self, hand):

        d = {}
        for c in hand: 
            d[c[1]] = 0

        for c in hand:
            d[c[1]] += 1

        for key, value in d.items():
            if value == 5:
                return hand[4][0]

        return 0

    def full_house(self, hand):
        if self.three_kind(hand) and self.pair(hand):
            return [self.three_kind(hand), self.pair(hand)]
        
        return [] 
    
    def four_kind(self, hand):
        d = self.identical_count(hand)
        for key, value in d.items():
            if value == 4:
                return key
        
        return 0

    def straight_flush(self, hand):
        if self.straight(hand) and self.flush(hand):
            return hand[4][0]
        return 0

    def get_points(self, hand):

        sf = self.straight_flush(hand)
        if sf: return 10**9 + sf

        sf = self.four_kind(hand)
        if sf: return 10**8 + sf

        fh = self.full_house(hand)
        if fh: return 10**7 + (fh[0] * 10**2) + (fh[1] * 10)

        fl = self.flush(hand)
        if fl: return 10**6 + fl

        st = self.straight(hand)
        if st: return 10**5 + st

        tk = self.three_kind(hand)
        if tk: return 10**4 + tk

        tp = self.two_pair(hand)
        if tp: return 10**3 + (tp[0] * 10**2) + (tp[1] * 10)

        pa = self.pair(hand)
        if pa: return 10**2 + pa

        hc = self.high_card(hand)
        return hc
        
    def get_winner(self, hands):
        pass

    def run_games(self):
        fc = self.read_file()
        lines = fc.split('\n')
        
        p1_wins = 0
        for l in lines:
            if (l == ''): 
                continue
            
            game = l.split(' ')
            player_1 = self.convert_hand(game[0:5])
            player_2 = self.convert_hand(game[5:])

            if self.get_points(player_1) > self.get_points(player_2):
                p1_wins += 1
            
        print('player one wins', p1_wins)


def test():
    p = Poker()
    p.run_games()

import timeit
timer = timeit.timeit(
                    stmt = test, 
                    number = 1)

print("In time: ", timer, 'secs')