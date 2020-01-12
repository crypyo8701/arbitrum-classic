/*
* Copyright 2019-2020, Offchain Labs, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

package common

import (
	"math/big"

	ethcommon "github.com/ethereum/go-ethereum/common"
)

type Hash ethcommon.Hash

func MarshalHash(h Hash) *HashBuf {
	return &HashBuf{
		Value: append([]byte{}, h[:]...),
	}
}

func MarshalSliceOfHashes(hs []Hash) []*HashBuf {
	ret := make([]*HashBuf, 0, len(hs))
	for _, h := range hs {
		ret = append(ret, MarshalHash(h))
	}
	return ret
}

func UnmarshalHash(hb *HashBuf) Hash {
	var ret Hash
	copy(ret[:], hb.Value)
	return ret
}

func MarshalBigInt(bi *big.Int) *BigIntegerBuf {
	return &BigIntegerBuf{
		Value: bi.Bytes(),
	}
}
func MarshalInt64ToBigIntBuf(val int64) *BigIntegerBuf {
	return MarshalBigInt(big.NewInt(val))
}

func UnmarshalBigInt(buf *BigIntegerBuf) *big.Int {
	return new(big.Int).SetBytes(buf.Value)
}

var zeroAddress Address

func init() {
	zeroAddress = Address{}
}

func AddressIsZero(addr Address) bool {
	return addr == zeroAddress
}
