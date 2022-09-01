/* eslint-disable @typescript-eslint/naming-convention */

export const lightHouseRopstenConfig = {
  CONFIG_NAME: "ropsten",
  PRESET_BASE: "mainnet",
  TERMINAL_TOTAL_DIFFICULTY: "50000000000000000",
  TERMINAL_BLOCK_HASH: "0x0000000000000000000000000000000000000000000000000000000000000000",
  TERMINAL_BLOCK_HASH_ACTIVATION_EPOCH: "18446744073709551615",
  SAFE_SLOTS_TO_IMPORT_OPTIMISTICALLY: "128",
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: "100000",
  MIN_GENESIS_TIME: "1653318000",
  GENESIS_FORK_VERSION: "0x80000069",
  GENESIS_DELAY: "604800",
  ALTAIR_FORK_VERSION: "0x80000070",
  ALTAIR_FORK_EPOCH: "500",
  BELLATRIX_FORK_VERSION: "0x80000071",
  BELLATRIX_FORK_EPOCH: "750",
  SECONDS_PER_SLOT: "12",
  SECONDS_PER_ETH1_BLOCK: "14",
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: "256",
  SHARD_COMMITTEE_PERIOD: "256",
  ETH1_FOLLOW_DISTANCE: "2048",
  INACTIVITY_SCORE_BIAS: "4",
  INACTIVITY_SCORE_RECOVERY_RATE: "16",
  EJECTION_BALANCE: "16000000000",
  MIN_PER_EPOCH_CHURN_LIMIT: "4",
  CHURN_LIMIT_QUOTIENT: "65536",
  PROPOSER_SCORE_BOOST: "40",
  DEPOSIT_CHAIN_ID: "3",
  DEPOSIT_NETWORK_ID: "3",
  DEPOSIT_CONTRACT_ADDRESS: "0x6f22ffbc56eff051aecf839396dd1ed9ad6bba9d",
  MAX_COMMITTEES_PER_SLOT: "64",
  TARGET_COMMITTEE_SIZE: "128",
  MAX_VALIDATORS_PER_COMMITTEE: "2048",
  SHUFFLE_ROUND_COUNT: "90",
  HYSTERESIS_QUOTIENT: "4",
  HYSTERESIS_DOWNWARD_MULTIPLIER: "1",
  HYSTERESIS_UPWARD_MULTIPLIER: "5",
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: "8",
  MIN_DEPOSIT_AMOUNT: "1000000000",
  MAX_EFFECTIVE_BALANCE: "32000000000",
  EFFECTIVE_BALANCE_INCREMENT: "1000000000",
  MIN_ATTESTATION_INCLUSION_DELAY: "1",
  SLOTS_PER_EPOCH: "32",
  MIN_SEED_LOOKAHEAD: "1",
  MAX_SEED_LOOKAHEAD: "4",
  EPOCHS_PER_ETH1_VOTING_PERIOD: "64",
  SLOTS_PER_HISTORICAL_ROOT: "8192",
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: "4",
  EPOCHS_PER_HISTORICAL_VECTOR: "65536",
  EPOCHS_PER_SLASHINGS_VECTOR: "8192",
  HISTORICAL_ROOTS_LIMIT: "16777216",
  VALIDATOR_REGISTRY_LIMIT: "1099511627776",
  BASE_REWARD_FACTOR: "64",
  WHISTLEBLOWER_REWARD_QUOTIENT: "512",
  PROPOSER_REWARD_QUOTIENT: "8",
  INACTIVITY_PENALTY_QUOTIENT: "67108864",
  MIN_SLASHING_PENALTY_QUOTIENT: "128",
  PROPORTIONAL_SLASHING_MULTIPLIER: "1",
  MAX_PROPOSER_SLASHINGS: "16",
  MAX_ATTESTER_SLASHINGS: "2",
  MAX_ATTESTATIONS: "128",
  MAX_DEPOSITS: "16",
  MAX_VOLUNTARY_EXITS: "16",
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: "50331648",
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: "64",
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: "2",
  SYNC_COMMITTEE_SIZE: "512",
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: "256",
  MIN_SYNC_COMMITTEE_PARTICIPANTS: "1",
  DOMAIN_DEPOSIT: "0x03000000",
  DOMAIN_APPLICATION_MASK: "0x00000001",
  DOMAIN_BEACON_ATTESTER: "0x01000000",
  TARGET_AGGREGATORS_PER_COMMITTEE: "16",
  DOMAIN_RANDAO: "0x02000000",
  DOMAIN_BEACON_PROPOSER: "0x00000000",
  DOMAIN_AGGREGATE_AND_PROOF: "0x06000000",
  RANDOM_SUBNETS_PER_VALIDATOR: "1",
  BLS_WITHDRAWAL_PREFIX: "0x00",
  DOMAIN_SELECTION_PROOF: "0x05000000",
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION: "256",
  DOMAIN_VOLUNTARY_EXIT: "0x04000000",
};

export const prysmRopstenConfig = {
  ALTAIR_FORK_EPOCH: "500",
  ALTAIR_FORK_VERSION: "0x80000070",
  BASE_REWARD_FACTOR: "64",
  BELLATRIX_FORK_EPOCH: "750",
  BELLATRIX_FORK_VERSION: "0x80000071",
  BLS_WITHDRAWAL_PREFIX: "0x00",
  CAPELLA_FORK_EPOCH: "18446744073709551615",
  CAPELLA_FORK_VERSION: "0x03000000",
  CHURN_LIMIT_QUOTIENT: "65536",
  CONFIG_NAME: "ropsten",
  DEPOSIT_CHAIN_ID: "3",
  DEPOSIT_CONTRACT_ADDRESS: "0x6f22fFbC56eFF051aECF839396DD1eD9aD6BBA9D",
  DEPOSIT_NETWORK_ID: "3",
  DOMAIN_AGGREGATE_AND_PROOF: "0x06000000",
  DOMAIN_APPLICATION_MASK: "0x00000001",
  DOMAIN_BEACON_ATTESTER: "0x01000000",
  DOMAIN_BEACON_PROPOSER: "0x00000000",
  DOMAIN_CONTRIBUTION_AND_PROOF: "0x09000000",
  DOMAIN_DEPOSIT: "0x03000000",
  DOMAIN_RANDAO: "0x02000000",
  DOMAIN_SELECTION_PROOF: "0x05000000",
  DOMAIN_SYNC_COMMITTEE: "0x07000000",
  DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF: "0x08000000",
  DOMAIN_VOLUNTARY_EXIT: "0x04000000",
  EFFECTIVE_BALANCE_INCREMENT: "1000000000",
  EJECTION_BALANCE: "16000000000",
  EPOCHS_PER_ETH1_VOTING_PERIOD: "64",
  EPOCHS_PER_HISTORICAL_VECTOR: "65536",
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION: "256",
  EPOCHS_PER_SLASHINGS_VECTOR: "8192",
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: "256",
  ETH1_ADDRESS_WITHDRAWAL_PREFIX: "0x01",
  ETH1_FOLLOW_DISTANCE: "2048",
  GENESIS_DELAY: "604800",
  GENESIS_FORK_VERSION: "0x80000069",
  HISTORICAL_ROOTS_LIMIT: "16777216",
  HYSTERESIS_DOWNWARD_MULTIPLIER: "1",
  HYSTERESIS_QUOTIENT: "4",
  HYSTERESIS_UPWARD_MULTIPLIER: "5",
  INACTIVITY_PENALTY_QUOTIENT: "67108864",
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: "50331648",
  INACTIVITY_PENALTY_QUOTIENT_BELLATRIX: "16777216",
  INACTIVITY_SCORE_BIAS: "4",
  INACTIVITY_SCORE_RECOVERY_RATE: "16",
  INTERVALS_PER_SLOT: "3",
  MAX_ATTESTATIONS: "128",
  MAX_ATTESTER_SLASHINGS: "2",
  MAX_COMMITTEES_PER_SLOT: "64",
  MAX_DEPOSITS: "16",
  MAX_EFFECTIVE_BALANCE: "32000000000",
  MAX_PROPOSER_SLASHINGS: "16",
  MAX_SEED_LOOKAHEAD: "4",
  MAX_VALIDATORS_PER_COMMITTEE: "2048",
  MAX_VOLUNTARY_EXITS: "16",
  MIN_ATTESTATION_INCLUSION_DELAY: "1",
  MIN_DEPOSIT_AMOUNT: "1000000000",
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: "4",
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: "100000",
  MIN_GENESIS_TIME: "1653318000",
  MIN_PER_EPOCH_CHURN_LIMIT: "4",
  MIN_SEED_LOOKAHEAD: "1",
  MIN_SLASHING_PENALTY_QUOTIENT: "128",
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: "64",
  MIN_SLASHING_PENALTY_QUOTIENT_BELLATRIX: "32",
  MIN_SYNC_COMMITTEE_PARTICIPANTS: "1",
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: "256",
  PRESET_BASE: "mainnet",
  PROPORTIONAL_SLASHING_MULTIPLIER: "1",
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: "2",
  PROPORTIONAL_SLASHING_MULTIPLIER_BELLATRIX: "3",
  PROPOSER_REWARD_QUOTIENT: "8",
  PROPOSER_SCORE_BOOST: "40",
  PROPOSER_WEIGHT: "8",
  RANDOM_SUBNETS_PER_VALIDATOR: "1",
  SAFE_SLOTS_TO_IMPORT_OPTIMISTICALLY: "128",
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: "8",
  SECONDS_PER_ETH1_BLOCK: "14",
  SECONDS_PER_SLOT: "12",
  SHARDING_FORK_EPOCH: "18446744073709551615",
  SHARDING_FORK_VERSION: "0x04000000",
  SHARD_COMMITTEE_PERIOD: "256",
  SHUFFLE_ROUND_COUNT: "90",
  SLOTS_PER_EPOCH: "32",
  SLOTS_PER_HISTORICAL_ROOT: "8192",
  SYNC_COMMITTEE_SIZE: "512",
  SYNC_COMMITTEE_SUBNET_COUNT: "4",
  SYNC_REWARD_WEIGHT: "2",
  TARGET_AGGREGATORS_PER_COMMITTEE: "16",
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE: "16",
  TARGET_COMMITTEE_SIZE: "128",
  TERMINAL_BLOCK_HASH: "0x0000000000000000000000000000000000000000000000000000000000000000",
  TERMINAL_BLOCK_HASH_ACTIVATION_EPOCH: "18446744073709551615",
  TERMINAL_TOTAL_DIFFICULTY: "50000000000000000",
  TIMELY_HEAD_FLAG_INDEX: "0x02",
  TIMELY_HEAD_WEIGHT: "14",
  TIMELY_SOURCE_FLAG_INDEX: "0x00",
  TIMELY_SOURCE_WEIGHT: "14",
  TIMELY_TARGET_FLAG_INDEX: "0x01",
  TIMELY_TARGET_WEIGHT: "26",
  VALIDATOR_REGISTRY_LIMIT: "1099511627776",
  WEIGHT_DENOMINATOR: "64",
  WHISTLEBLOWER_REWARD_QUOTIENT: "512",
};

export const tekuRopstenConfig = {
  DEPOSIT_CONTRACT_ADDRESS: "0x6f22fFbC56eFF051aECF839396DD1eD9aD6BBA9D",
  MIN_ATTESTATION_INCLUSION_DELAY: "1",
  SLOTS_PER_EPOCH: "32",
  PRESET_BASE: "mainnet",
  TERMINAL_TOTAL_DIFFICULTY: "50000000000000000",
  INACTIVITY_SCORE_BIAS: "4",
  SHUFFLE_ROUND_COUNT: "90",
  TERMINAL_BLOCK_HASH_ACTIVATION_EPOCH: "18446744073709551615",
  MAX_EFFECTIVE_BALANCE: "32000000000",
  DOMAIN_BEACON_PROPOSER: "0x00000000",
  DOMAIN_SYNC_COMMITTEE: "0x07000000",
  PROPOSER_SCORE_BOOST: "40",
  MAX_ATTESTER_SLASHINGS: "2",
  DOMAIN_SELECTION_PROOF: "0x05000000",
  MIN_SLASHING_PENALTY_QUOTIENT_BELLATRIX: "32",
  INACTIVITY_PENALTY_QUOTIENT_BELLATRIX: "16777216",
  INACTIVITY_PENALTY_QUOTIENT: "67108864",
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: "8",
  SECONDS_PER_ETH1_BLOCK: "14",
  HYSTERESIS_UPWARD_MULTIPLIER: "5",
  MIN_SEED_LOOKAHEAD: "1",
  VALIDATOR_REGISTRY_LIMIT: "1099511627776",
  MIN_DEPOSIT_AMOUNT: "1000000000",
  SLOTS_PER_HISTORICAL_ROOT: "8192",
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: "2",
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: "256",
  DOMAIN_VOLUNTARY_EXIT: "0x04000000",
  TARGET_COMMITTEE_SIZE: "128",
  MAX_VALIDATORS_PER_COMMITTEE: "2048",
  MIN_GENESIS_TIME: "1653318000",
  TERMINAL_BLOCK_HASH: "0x0000000000000000000000000000000000000000000000000000000000000000",
  ALTAIR_FORK_EPOCH: "500",
  HYSTERESIS_QUOTIENT: "4",
  ALTAIR_FORK_VERSION: "0x80000070",
  RANDOM_SUBNETS_PER_VALIDATOR: "1",
  DOMAIN_DEPOSIT: "0x03000000",
  MAX_BYTES_PER_TRANSACTION: "1073741824",
  DOMAIN_CONTRIBUTION_AND_PROOF: "0x09000000",
  UPDATE_TIMEOUT: "8192",
  WHISTLEBLOWER_REWARD_QUOTIENT: "512",
  PROPOSER_REWARD_QUOTIENT: "8",
  DEPOSIT_CHAIN_ID: "3",
  DOMAIN_RANDAO: "0x02000000",
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION: "256",
  EPOCHS_PER_HISTORICAL_VECTOR: "65536",
  MIN_PER_EPOCH_CHURN_LIMIT: "4",
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: "64",
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE: "16",
  EPOCHS_PER_ETH1_VOTING_PERIOD: "64",
  MAX_DEPOSITS: "16",
  BELLATRIX_FORK_EPOCH: "750",
  HISTORICAL_ROOTS_LIMIT: "16777216",
  SYNC_COMMITTEE_SIZE: "512",
  TARGET_AGGREGATORS_PER_COMMITTEE: "16",
  DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF: "0x08000000",
  EPOCHS_PER_SLASHINGS_VECTOR: "8192",
  MIN_SLASHING_PENALTY_QUOTIENT: "128",
  PROPORTIONAL_SLASHING_MULTIPLIER: "1",
  MAX_VOLUNTARY_EXITS: "16",
  HYSTERESIS_DOWNWARD_MULTIPLIER: "1",
  DOMAIN_BEACON_ATTESTER: "0x01000000",
  DOMAIN_APPLICATION_BUILDER: "0x00000001",
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: "256",
  GENESIS_DELAY: "604800",
  MAX_SEED_LOOKAHEAD: "4",
  BYTES_PER_LOGS_BLOOM: "256",
  ETH1_FOLLOW_DISTANCE: "2048",
  SECONDS_PER_SLOT: "12",
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: "100000",
  MIN_SYNC_COMMITTEE_PARTICIPANTS: "1",
  MAX_ATTESTATIONS: "128",
  BELLATRIX_FORK_VERSION: "0x80000071",
  GENESIS_FORK_VERSION: "0x80000069",
  DEPOSIT_NETWORK_ID: "3",
  PROPORTIONAL_SLASHING_MULTIPLIER_BELLATRIX: "3",
  SYNC_COMMITTEE_SUBNET_COUNT: "4",
  EJECTION_BALANCE: "16000000000",
  MAX_COMMITTEES_PER_SLOT: "64",
  SHARD_COMMITTEE_PERIOD: "256",
  EFFECTIVE_BALANCE_INCREMENT: "1000000000",
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: "50331648",
  DOMAIN_AGGREGATE_AND_PROOF: "0x06000000",
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: "4",
  BASE_REWARD_FACTOR: "64",
  MAX_EXTRA_DATA_BYTES: "32",
  CONFIG_NAME: "ropsten",
  MAX_PROPOSER_SLASHINGS: "16",
  CHURN_LIMIT_QUOTIENT: "65536",
  INACTIVITY_SCORE_RECOVERY_RATE: "16",
  BLS_WITHDRAWAL_PREFIX: "0x00",
  MAX_TRANSACTIONS_PER_PAYLOAD: "1048576",
};

export const nimbusRopstenConfig = {
  MAX_COMMITTEES_PER_SLOT: "64",
  TARGET_COMMITTEE_SIZE: "128",
  MAX_VALIDATORS_PER_COMMITTEE: "2048",
  SHUFFLE_ROUND_COUNT: "90",
  HYSTERESIS_QUOTIENT: "4",
  HYSTERESIS_DOWNWARD_MULTIPLIER: "1",
  HYSTERESIS_UPWARD_MULTIPLIER: "5",
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: "8",
  MIN_DEPOSIT_AMOUNT: "1000000000",
  MAX_EFFECTIVE_BALANCE: "32000000000",
  EFFECTIVE_BALANCE_INCREMENT: "1000000000",
  MIN_ATTESTATION_INCLUSION_DELAY: "1",
  SLOTS_PER_EPOCH: "32",
  MIN_SEED_LOOKAHEAD: "1",
  MAX_SEED_LOOKAHEAD: "4",
  EPOCHS_PER_ETH1_VOTING_PERIOD: "64",
  SLOTS_PER_HISTORICAL_ROOT: "8192",
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: "4",
  EPOCHS_PER_HISTORICAL_VECTOR: "65536",
  EPOCHS_PER_SLASHINGS_VECTOR: "8192",
  HISTORICAL_ROOTS_LIMIT: "16777216",
  VALIDATOR_REGISTRY_LIMIT: "1099511627776",
  BASE_REWARD_FACTOR: "64",
  WHISTLEBLOWER_REWARD_QUOTIENT: "512",
  PROPOSER_REWARD_QUOTIENT: "8",
  INACTIVITY_PENALTY_QUOTIENT: "67108864",
  MIN_SLASHING_PENALTY_QUOTIENT: "128",
  PROPORTIONAL_SLASHING_MULTIPLIER: "1",
  MAX_PROPOSER_SLASHINGS: "16",
  MAX_ATTESTER_SLASHINGS: "2",
  MAX_ATTESTATIONS: "128",
  MAX_DEPOSITS: "16",
  MAX_VOLUNTARY_EXITS: "16",
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: "50331648",
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: "64",
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: "2",
  SYNC_COMMITTEE_SIZE: "512",
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: "256",
  MIN_SYNC_COMMITTEE_PARTICIPANTS: "1",
  UPDATE_TIMEOUT: "8192",
  INACTIVITY_PENALTY_QUOTIENT_BELLATRIX: "16777216",
  MIN_SLASHING_PENALTY_QUOTIENT_BELLATRIX: "32",
  PROPORTIONAL_SLASHING_MULTIPLIER_BELLATRIX: "3",
  MAX_BYTES_PER_TRANSACTION: "1073741824",
  MAX_TRANSACTIONS_PER_PAYLOAD: "1048576",
  BYTES_PER_LOGS_BLOOM: "256",
  MAX_EXTRA_DATA_BYTES: "32",
  PRESET_BASE: "mainnet",
  CONFIG_NAME: "ropsten",
  TERMINAL_TOTAL_DIFFICULTY: "50000000000000000",
  TERMINAL_BLOCK_HASH: "0x0000000000000000000000000000000000000000000000000000000000000000",
  TERMINAL_BLOCK_HASH_ACTIVATION_EPOCH: "18446744073709551615",
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: "100000",
  MIN_GENESIS_TIME: "1653318000",
  GENESIS_FORK_VERSION: "0x80000069",
  GENESIS_DELAY: "604800",
  ALTAIR_FORK_VERSION: "0x80000070",
  ALTAIR_FORK_EPOCH: "500",
  BELLATRIX_FORK_VERSION: "0x80000071",
  BELLATRIX_FORK_EPOCH: "750",
  CAPELLA_FORK_VERSION: "0x03001020",
  CAPELLA_FORK_EPOCH: "18446744073709551615",
  SHARDING_FORK_VERSION: "0x04001020",
  SHARDING_FORK_EPOCH: "18446744073709551615",
  SECONDS_PER_SLOT: "12",
  SECONDS_PER_ETH1_BLOCK: "14",
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: "256",
  SHARD_COMMITTEE_PERIOD: "256",
  ETH1_FOLLOW_DISTANCE: "2048",
  INACTIVITY_SCORE_BIAS: "4",
  INACTIVITY_SCORE_RECOVERY_RATE: "16",
  EJECTION_BALANCE: "16000000000",
  MIN_PER_EPOCH_CHURN_LIMIT: "4",
  CHURN_LIMIT_QUOTIENT: "65536",
  PROPOSER_SCORE_BOOST: "40",
  DEPOSIT_CHAIN_ID: "3",
  DEPOSIT_NETWORK_ID: "3",
  DEPOSIT_CONTRACT_ADDRESS: "0x6f22ffbc56eff051aecf839396dd1ed9ad6bba9d",
  BLS_WITHDRAWAL_PREFIX: "0x00",
  ETH1_ADDRESS_WITHDRAWAL_PREFIX: "0x01",
  DOMAIN_BEACON_PROPOSER: "0x00000000",
  DOMAIN_BEACON_ATTESTER: "0x01000000",
  DOMAIN_RANDAO: "0x02000000",
  DOMAIN_DEPOSIT: "0x03000000",
  DOMAIN_VOLUNTARY_EXIT: "0x04000000",
  DOMAIN_SELECTION_PROOF: "0x05000000",
  DOMAIN_AGGREGATE_AND_PROOF: "0x06000000",
  TIMELY_SOURCE_FLAG_INDEX: "0x00",
  TIMELY_TARGET_FLAG_INDEX: "0x01",
  TIMELY_HEAD_FLAG_INDEX: "0x02",
  TIMELY_SOURCE_WEIGHT: "14",
  TIMELY_TARGET_WEIGHT: "26",
  TIMELY_HEAD_WEIGHT: "14",
  SYNC_REWARD_WEIGHT: "2",
  PROPOSER_WEIGHT: "8",
  WEIGHT_DENOMINATOR: "64",
  DOMAIN_SYNC_COMMITTEE: "0x07000000",
  DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF: "0x08000000",
  DOMAIN_CONTRIBUTION_AND_PROOF: "0x09000000",
  TARGET_AGGREGATORS_PER_COMMITTEE: "16",
  RANDOM_SUBNETS_PER_VALIDATOR: "1",
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION: "256",
  ATTESTATION_SUBNET_COUNT: "64",
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE: "16",
  SYNC_COMMITTEE_SUBNET_COUNT: "4",
};
